package com.fenixdc.signum.activitys.profile;

import android.os.Bundle;
import android.widget.ImageView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.activitys.learn.LearnActivity;
import com.fenixdc.signum.entities.User;
import com.fenixdc.signum.recyclerview.RecyclerCertificateAdapter;
import com.fenixdc.signum.utils.GeneralUtils;

public class CertificatesActivity extends AppCompatActivity {
    User loggedUser;
    ImageView btnBack, btmDictionary, btmLearn, btmProfile;
    RecyclerView rvCertificates;
    RecyclerCertificateAdapter certificateAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_certificates);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        GeneralUtils.showLoadingDialog(this);
        setUpElements();
        setUpListeners();
    }

    private void setUpElements(){
        loggedUser = (User) getIntent().getSerializableExtra("user");
        btnBack = findViewById(R.id.btnBackCertificates);
        btmProfile = findViewById(R.id.btmCertificatesUser);
        btmDictionary = findViewById(R.id.btmCertificatesDictionary);
        btmLearn = findViewById(R.id.btmCertificatesLearn);
        rvCertificates = findViewById(R.id.rvCertificates);
        certificateAdapter = new RecyclerCertificateAdapter(loggedUser, this);
        rvCertificates.setAdapter(certificateAdapter);
        rvCertificates.setLayoutManager(new LinearLayoutManager(this, LinearLayoutManager.VERTICAL,false));
    }

    private void setUpListeners(){
        btnBack.setOnClickListener(v -> onBackPressed());
        btmProfile.setOnClickListener(v -> onBackPressed());
        btmDictionary.setOnClickListener(v -> GeneralUtils.openActivity(this, DictionaryActivity.class, true));
        btmLearn.setOnClickListener(v -> GeneralUtils.openActivity(this, LearnActivity.class, true));
        GeneralUtils.hideLoadingDialog(this);
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        GeneralUtils.openActivity(this, ProfileActivity.class, true);
    }
}