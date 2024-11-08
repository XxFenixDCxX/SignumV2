package com.fenixdc.signum.activitys.profile;

import android.annotation.SuppressLint;
import android.app.DatePickerDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
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
import com.fenixdc.signum.utils.DialogUtils;
import com.fenixdc.signum.utils.GeneralUtils;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

public class PersonalDetailsActivity extends AppCompatActivity {
    final int PICK_IMAGE_REQUEST = 1;
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
        imgPersonalDetails.setOnClickListener(v -> {
            Intent intent = new Intent();
            intent.setType("image/*");
            intent.setAction(Intent.ACTION_GET_CONTENT);
            startActivityForResult(Intent.createChooser(intent, getString(R.string.selectImage)), PICK_IMAGE_REQUEST);
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

    private void uploadImageToFirebaseStorage(Uri imageUri) {
        StorageReference storageReference = FirebaseStorage.getInstance().getReference().child("profile_images/").child(loggedUser.getUsername() + ".jpg");

        storageReference.putFile(imageUri)
                .addOnSuccessListener(taskSnapshot -> storageReference.getDownloadUrl().addOnSuccessListener(this::updateProfileImage))
                .addOnFailureListener(e -> DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorLogImage)));
    }

    private void updateProfileImage(Uri imageUrl) {
        loggedUser.setImageUrl(imageUrl.toString());
        Map<String, Object> data = new HashMap<>();
        data.put("username", loggedUser.getUsername());
        data.put("email", loggedUser.getEmail());
        data.put("imageUrl", loggedUser.getImageUrl());
        data.put("birthDate", loggedUser.getBirthDate());
        GeneralUtils.updateItemDatabase(this, data, "users", loggedUser.getEmail());
        GeneralUtils.loadImageFromUrl(loggedUser.getImageUrl(), imgPersonalDetails);
        GeneralUtils.hideLoadingDialog(this);
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        GeneralUtils.openActivity(this, ProfileActivity.class, true);
    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        GeneralUtils.showLoadingDialog(this);
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == PICK_IMAGE_REQUEST && resultCode == RESULT_OK && data != null && data.getData() != null) {
            Uri selectedImageUri = data.getData();
            uploadImageToFirebaseStorage(selectedImageUri);
        }
    }
}