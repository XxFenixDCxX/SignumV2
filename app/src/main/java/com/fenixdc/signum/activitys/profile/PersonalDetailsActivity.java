package com.fenixdc.signum.activitys.profile;

import android.annotation.SuppressLint;
import android.app.DatePickerDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.entities.User;
import com.fenixdc.signum.utils.GeneralUtils;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

public class PersonalDetailsActivity extends AppCompatActivity {
    BroadcastReceiver userUpdateReceiver;
    ImageView btmUser, btmDictionary, btmLearn, btnBack, imgPersonalDetails;
    User loggedUser;
    EditText eTxtName, etxtEmail, eTxtBirthDate;
    DatePickerDialog datePickerDialog;
    Button btnSave;

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
        userUpdateReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                loadData();
            }
        };
        LocalBroadcastManager.getInstance(this).registerReceiver(userUpdateReceiver, new IntentFilter("USER_UPDATED"));
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        int dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);
        datePickerDialog = new DatePickerDialog(
                this,
                (view, year1, monthOfYear, dayOfMonth1) -> {
                    String selectedDate = dayOfMonth1 + "/" + (monthOfYear + 1) + "/" + year1;
                    eTxtBirthDate.setText(selectedDate);
                },
                year, month, dayOfMonth
        );
        btmUser = findViewById(R.id.btmPersonalDetailsUser);
        btmDictionary = findViewById(R.id.btmPersonalDetailsDictionary);
        btmLearn = findViewById(R.id.btmPersonalDetailsLearn);
        btnBack = findViewById(R.id.btnBackPersonalDetails);
        imgPersonalDetails = findViewById(R.id.imgProfilePersonalDetails);
        eTxtName = findViewById(R.id.eTxtUsernamePersonalProfile);
        etxtEmail = findViewById(R.id.eTxtEmailPersonalDetails);
        eTxtBirthDate = findViewById(R.id.eTxtDatePersonalDetails);
        btnSave = findViewById(R.id.btnSavePersonalDetails);
    }

    @SuppressLint("ClickableViewAccessibility")
    private void setUpListeners(){
        btmUser.setOnClickListener(v -> GeneralUtils.openActivity(this, ProfileActivity.class, true));
        btmDictionary.setOnClickListener(v -> GeneralUtils.openActivity(this, DictionaryActivity.class, true));
        btmLearn.setOnClickListener(v -> GeneralUtils.openActivity(this, ProfileActivity.class, true));
        btnBack.setOnClickListener(v -> onBackPressed());
        eTxtBirthDate.setOnTouchListener((v, event) -> {
            InputMethodManager imm = (InputMethodManager) getSystemService(INPUT_METHOD_SERVICE);
            imm.hideSoftInputFromWindow(eTxtBirthDate.getWindowToken(), 0);
            datePickerDialog.show();
            return true;
        });
        btnSave.setOnClickListener(v -> {
            Map<String, Object> data = new HashMap<>();
            data.put("username", eTxtName.getText().toString());
            data.put("email", etxtEmail.getText().toString());
            data.put("imageUrl", loggedUser.getImageUrl());
            data.put("birthDate", eTxtBirthDate.getText().toString());
            GeneralUtils.updateItemDatabase(this, data, "users", loggedUser.getEmail());
        });
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

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        GeneralUtils.openActivity(this, ProfileActivity.class, true);
    }
}