package com.fenixdc.signum.activitys.loginRegister;

import android.os.Bundle;
import android.widget.Button;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.DictionaryActivity;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;

public class MainActivity extends AppCompatActivity {
    Button login, register;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        if (UserUtils.isLogedIn()) {
            GeneralUtils.openActivity(this, DictionaryActivity.class, true);
        }

        setUpElements();
        setUpListeners();
    }

    private void setUpElements() {
        login = findViewById(R.id.btnLogin);
        register = findViewById(R.id.btnRegister);
    }

    private void setUpListeners() {
        login.setOnClickListener(v -> GeneralUtils.openActivity(this, LoginActivity.class));
        register.setOnClickListener(v -> GeneralUtils.openActivity(this, RegisterActivity.class));
    }
}