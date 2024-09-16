package com.fenixdc.signum.activitys.loginRegister;

import android.content.Intent;
import android.os.Bundle;
import android.util.Patterns;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.DictionaryActivity;
import com.fenixdc.signum.utils.DialogUtils;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GoogleAuthProvider;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.HashMap;
import java.util.Map;

public class LoginActivity extends AppCompatActivity {
    static final int RC_SIGN_IN = 9001;
    TextView register, forgotPassword;
    Button login;
    EditText email, password;
    ImageView google, facebook, twitter;
    FirebaseAuth mAuth;
    GoogleSignInClient mGoogleSignInClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_login);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        setUpElements();
        setUpListeners();
    }

    private void setUpElements() {
        login = findViewById(R.id.btnLogin);
        register = findViewById(R.id.txtRegisterTextLogin);
        email = findViewById(R.id.eTxtEmail);
        password = findViewById(R.id.eTxtPassword);
        forgotPassword = findViewById(R.id.txtForgottPassword);
        google = findViewById(R.id.imgGoogle);
        facebook = findViewById(R.id.imgFacebook);
        twitter = findViewById(R.id.imgTwitter);
    }

    private void setUpListeners() {
        register.setOnClickListener(v -> openActivity(RegisterActivity.class, false));
        login.setOnClickListener(v -> validateElements());
        forgotPassword.setOnClickListener(v -> sendResetEmail());
        google.setOnClickListener(v -> googleLogin());
    }

    private void openActivity(Class<?> cls, boolean finish) {
        Intent intent = new Intent(this, cls);
        if (finish) {
            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
            finish();
        }
        startActivity(intent);
    }

    private void validateElements() {
        if (email.getText().toString().isEmpty() || password.getText().toString().isEmpty()) {
            DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorEmpty));
            return;
        }

        if (!Patterns.EMAIL_ADDRESS.matcher(email.getText().toString()).matches()){
            DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorEmail));
            return;
        }
        login();
    }

    private void login() {
        FirebaseAuth mAuth = FirebaseAuth.getInstance();
        mAuth.signInWithEmailAndPassword(email.getText().toString(), password.getText().toString())
            .addOnCompleteListener(task -> {
                if (task.isSuccessful()) {
                    openActivity(DictionaryActivity.class, true);
                } else {
                    DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.erroLogin));
                }
            });
    }

    private void sendResetEmail(){
        if (email.getText().toString().isEmpty()) {
            DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorEmailEmpty));
            return;
        }

        FirebaseAuth mAuth = FirebaseAuth.getInstance();
        mAuth.sendPasswordResetEmail(email.getText().toString())
            .addOnCompleteListener(task -> {
                if (task.isSuccessful()) {
                    DialogUtils.showSuccessDialog(this, getString(R.string.success), getString(R.string.successResetEmail));
                } else {
                    DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorResetEmail));
                }
            });
    }

    private void googleLogin() {
        GoogleSignInOptions gso = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestIdToken(getString(R.string.default_web_client_id))
                .requestEmail()
                .build();

        mGoogleSignInClient = GoogleSignIn.getClient(this, gso);
        mAuth = FirebaseAuth.getInstance();

        Intent sigInIntent = mGoogleSignInClient.getSignInIntent();
        startActivityForResult(sigInIntent, RC_SIGN_IN);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == RC_SIGN_IN) {
            Task<GoogleSignInAccount> task = GoogleSignIn.getSignedInAccountFromIntent(data);
            try {
                GoogleSignInAccount account = task.getResult(ApiException.class);
                firebaseAuthWithGoogle(account.getIdToken());
            } catch (ApiException e) {
                DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.erroLogin));
            }
        }
    }

    private void firebaseAuthWithGoogle(String idToken) {
        AuthCredential credential = GoogleAuthProvider.getCredential(idToken, null);
        mAuth.signInWithCredential(credential)
                .addOnCompleteListener(this, task -> {
                    if (task.isSuccessful()) {
                        FirebaseUser user = mAuth.getCurrentUser();
                        registerUser();
                    } else {
                        DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.erroLogin));
                    }
                });
    }


    private void registerUser() {
        CollectionReference usersCollection = FirebaseFirestore.getInstance().collection("users");
        if(mAuth.getCurrentUser() == null || mAuth.getCurrentUser().getEmail() == null || mAuth.getCurrentUser().getDisplayName() == null){
            DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.erroLogin));
            return;
        }
        String email = mAuth.getCurrentUser().getEmail();
        String username = mAuth.getCurrentUser().getDisplayName();
        DocumentReference document = usersCollection.document(email);

        Map<String, Object> data = new HashMap<>();
        data.put("username", username);
        data.put("email", email);

        document.set(data)
                .addOnSuccessListener(aVoid -> openActivity(DictionaryActivity.class, true))
                .addOnFailureListener(e -> DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.erroLogin)));
    }
}