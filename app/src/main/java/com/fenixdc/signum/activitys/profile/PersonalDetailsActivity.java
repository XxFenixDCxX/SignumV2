package com.fenixdc.signum.activitys.profile;

import android.os.Bundle;
import android.widget.ImageView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.utils.GeneralUtils;

public class PersonalDetailsActivity extends AppCompatActivity {
    ImageView btmUser, btmDictionary, btmLearn, btnBack;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_personal_details);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });


        GeneralUtils.showLoadingDialog(this);
        setUpElements();
        setUpListeners();
        loadData();
    }

    private void setUpElements(){
        btmUser = findViewById(R.id.btmPersonalDetailsUser);
        btmDictionary = findViewById(R.id.btmPersonalDetailsDictionary);
        btmLearn = findViewById(R.id.btmPersonalDetailsLearn);
        btnBack = findViewById(R.id.btnBackPersonalDetails);
    }

    private void setUpListeners(){
        btmUser.setOnClickListener(v -> GeneralUtils.openActivity(this, ProfileActivity.class));
        btmDictionary.setOnClickListener(v -> GeneralUtils.openActivity(this, DictionaryActivity.class));
        btmLearn.setOnClickListener(v -> GeneralUtils.openActivity(this, ProfileActivity.class));
        btnBack.setOnClickListener(v -> onBackPressed());
    }

    private void loadData() {}
}