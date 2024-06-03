package com.fenixdc.signum.activitys;

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
import com.fenixdc.signum.utils.DialogUtils;
import com.google.firebase.auth.FirebaseAuth;

public class LoginActivity extends AppCompatActivity {
    TextView register, forgotPassword;
    Button login;
    EditText email, password;
    ImageView google, facebook, twitter;

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
}