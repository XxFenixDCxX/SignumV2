package com.fenixdc.signum.activitys.loginRegister;

import android.os.Bundle;
import android.util.Patterns;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.fenixdc.signum.R;
import com.fenixdc.signum.utils.DialogUtils;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.List;

public class RegisterActivity extends AppCompatActivity {
    TextView login;
    EditText username, email, password, confirmPassword;
    Button register;
    CollectionReference usersCollection;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_register);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        setUpElements();
        setUpListeners();
    }

    private void setUpElements() {
        usersCollection = FirebaseFirestore.getInstance().collection("users");
        login = findViewById(R.id.txtLogin);
        email = findViewById(R.id.eTxtEmailRegister);
        username = findViewById(R.id.eTxtUsername);
        password = findViewById(R.id.eTxtPasswordRegister);
        confirmPassword = findViewById(R.id.eTxtConfirmPasswordRegister);
        register = findViewById(R.id.btnRegisterViewRegister);
    }

    private void setUpListeners() {
        login.setOnClickListener(v -> GeneralUtils.openActivity(this, LoginActivity.class));
        register.setOnClickListener(v -> validateElements());
    }

    private void validateElements() {
        if (email.getText().toString().isEmpty() || username.getText().toString().isEmpty() || password.getText().toString().isEmpty() || confirmPassword.getText().toString().isEmpty()){
            DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorEmpty));
            return;
        }

        if (username.getText().toString().length() < 3){
            DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorUsername));
            return;
        }

        if (!Patterns.EMAIL_ADDRESS.matcher(email.getText().toString()).matches()){
            DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorEmail));
            return;
        }

        if (!password.getText().toString().equals(confirmPassword.getText().toString())){
            DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorPassword));
            return;
        }

        if (password.getText().toString().length() < 6){
            DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorPasswordLength));
            return;
        }
        GeneralUtils.showLoadingDialog(this);
        validateExistEmail();
    }

    private void validateExistEmail() {
        usersCollection.whereEqualTo("email", email.getText().toString())
                .get()
                .addOnSuccessListener(queryDocumentSnapshots -> {
                    List<?> users = queryDocumentSnapshots.getDocuments();
                    if (!users.isEmpty()){
                        GeneralUtils.hideLoadingDialog(this);
                        DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorEmailAlreadyExists));
                    } else {
                        login();
                    }
                });
    }

    private void login() {
        FirebaseAuth mAuth = FirebaseAuth.getInstance();
        mAuth.createUserWithEmailAndPassword(email.getText().toString(), password.getText().toString())
                .addOnCompleteListener(this, task -> {
                    String email = this.email.getText().toString();
                    if (task.isSuccessful()){
                        UserUtils.registerUser(this, username.getText().toString(), email);
                    } else {
                        GeneralUtils.hideLoadingDialog(this);
                        DialogUtils.showErrorDialog(RegisterActivity.this, getString(R.string.error), getString(R.string.erroRegister));
                    }
                });
    }
}