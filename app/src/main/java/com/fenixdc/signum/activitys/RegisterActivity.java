package com.fenixdc.signum.activitys;

import android.content.Intent;
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
import com.google.firebase.auth.FirebaseAuth;

public class RegisterActivity extends AppCompatActivity {
    TextView login;
    EditText username, email, password, confirmPassword;
    Button register;

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
        login = findViewById(R.id.txtLogin);
        email = findViewById(R.id.eTxtEmailRegister);
        username = findViewById(R.id.eTxtUsername);
        password = findViewById(R.id.eTxtPasswordRegister);
        confirmPassword = findViewById(R.id.eTxtConfirmPasswordRegister);
        register = findViewById(R.id.btnRegisterViewRegister);
    }

    private void setUpListeners() {
        login.setOnClickListener(v -> openActivity(LoginActivity.class, false));
        register.setOnClickListener(v -> login());
    }

    private void openActivity(Class<?> cls, boolean finish) {
        if (finish) {
            finish();
        }
        Intent intent = new Intent(this, cls);
        startActivity(intent);
    }

    private void login() {
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

        FirebaseAuth mAuth = FirebaseAuth.getInstance();

        mAuth.createUserWithEmailAndPassword(email.getText().toString(), password.getText().toString())
                .addOnCompleteListener(this, task -> {
                    if (task.isSuccessful()){
                        DialogUtils.showSuccessDialog(RegisterActivity.this, getString(R.string.success), getString(R.string.successRegister));
                    } else {
                        DialogUtils.showErrorDialog(RegisterActivity.this, getString(R.string.error), getString(R.string.erroRegister));
                    }
                });

    }
}