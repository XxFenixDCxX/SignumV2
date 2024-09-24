package com.fenixdc.signum.activitys.profile;

import android.os.Bundle;
import android.widget.LinearLayout;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.loginRegister.LoginActivity;
import com.fenixdc.signum.activitys.loginRegister.MainActivity;
import com.fenixdc.signum.utils.GeneralUtils;
import com.google.firebase.auth.FirebaseAuth;

public class ProfileActivity extends AppCompatActivity {
    LinearLayout personalDetails, certificate, ranking, changeAccount, logout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_profile);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        setUpElements();
        setUpListeners();
    }

    private void setUpElements(){
        personalDetails = findViewById(R.id.llPersonalDetails);
        certificate = findViewById(R.id.llCertificates);
        ranking = findViewById(R.id.llRanking);
        changeAccount = findViewById(R.id.llChangeAcount);
        logout = findViewById(R.id.llCloseSesion);
    }

    private void setUpListeners(){
        changeAccount.setOnClickListener(v -> {
            FirebaseAuth.getInstance().signOut();
            GeneralUtils.openActivity(this, LoginActivity.class, true);
        });

        logout.setOnClickListener(v -> {
            FirebaseAuth.getInstance().signOut();
            GeneralUtils.openActivity(this, MainActivity.class, true);
        });
    }
}