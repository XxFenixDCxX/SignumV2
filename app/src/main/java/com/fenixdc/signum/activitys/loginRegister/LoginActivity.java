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
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;
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
    }

    private void setUpListeners() {
        register.setOnClickListener(v -> GeneralUtils.openActivity(this, RegisterActivity.class, false));
        login.setOnClickListener(v -> validateElements());
        forgotPassword.setOnClickListener(v -> sendResetEmail());
        google.setOnClickListener(v -> googleLogin());
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
                    GeneralUtils.openActivity(this, DictionaryActivity.class, true);
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
                        if(user == null || user.getEmail() == null || user.getDisplayName() == null){
                            DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.erroLogin));
                            return;
                        }
                        UserUtils.registerUser(this, user.getDisplayName(), user.getEmail());
                    } else {
                        DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.erroLogin));
                    }
                });
    }
}