package com.fenixdc.signum.activitys.profile;

import android.os.Bundle;
import android.widget.EditText;
import android.widget.ImageView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.entities.User;
import com.fenixdc.signum.utils.GeneralUtils;

public class PersonalDetailsActivity extends AppCompatActivity {
    ImageView btmUser, btmDictionary, btmLearn, btnBack, imgPersonalDetails;
    User loggedUser;
    EditText eTxtName, etxtEmail, eTxtBirthDate;

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
        imgPersonalDetails = findViewById(R.id.imgProfilePersonalDetails);
        eTxtName = findViewById(R.id.eTxtUsernamePersonalProfile);
        etxtEmail = findViewById(R.id.eTxtEmailPersonalDetails);
        eTxtBirthDate = findViewById(R.id.eTxtDatePersonalDetails);
    }

    private void setUpListeners(){
        btmUser.setOnClickListener(v -> GeneralUtils.openActivity(this, ProfileActivity.class));
        btmDictionary.setOnClickListener(v -> GeneralUtils.openActivity(this, DictionaryActivity.class));
        btmLearn.setOnClickListener(v -> GeneralUtils.openActivity(this, ProfileActivity.class));
        btnBack.setOnClickListener(v -> onBackPressed());
    }

    private void loadData() {
        loggedUser = (User) getIntent().getSerializableExtra("user");
        if(loggedUser == null) {
            GeneralUtils.hideLoadingDialog(this);
            GeneralUtils.openActivity(this, ProfileActivity.class);
        }
        GeneralUtils.loadImageFromUrl(loggedUser.getImageUrl(), imgPersonalDetails);
        eTxtName.setText(loggedUser.getUsername());
        etxtEmail.setText(loggedUser.getEmail());
        eTxtBirthDate.setText(loggedUser.getBirthDate());
        GeneralUtils.hideLoadingDialog(this);
    }
}