package com.fenixdc.signum.activitys.profile;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.activitys.learn.LearnActivity;
import com.fenixdc.signum.activitys.loginRegister.LoginActivity;
import com.fenixdc.signum.activitys.loginRegister.MainActivity;
import com.fenixdc.signum.entities.User;
import com.fenixdc.signum.utils.DialogUtils;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;
import com.google.firebase.auth.FirebaseAuth;

import java.util.Objects;

public class ProfileActivity extends AppCompatActivity {
    LinearLayout personalDetails, certificate, ranking, changeAccount, logout;
    TextView email, username;
    ImageView profileImage, btmDictionary, btmLearn;
    User loggedUser;

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

        GeneralUtils.showLoadingDialog(this);
        setUpElements();
        setUpListeners();
        loadData();
    }

    private void setUpElements(){
        personalDetails = findViewById(R.id.llPersonalDetails);
        certificate = findViewById(R.id.llCertificates);
        ranking = findViewById(R.id.llRanking);
        changeAccount = findViewById(R.id.llChangeAcount);
        logout = findViewById(R.id.llCloseSesion);
        email = findViewById(R.id.txtEmailProfile);
        username = findViewById(R.id.txtUsernameProfile);
        profileImage = findViewById(R.id.imgProfile);
        btmDictionary = findViewById(R.id.btmProfileDictionary);
        btmLearn = findViewById(R.id.btmProfileLearn);
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
        btmLearn.setOnClickListener(v -> GeneralUtils.openActivity(this, LearnActivity.class));
        btmDictionary.setOnClickListener(v -> GeneralUtils.openActivity(this, DictionaryActivity.class));
        personalDetails.setOnClickListener(v -> GeneralUtils.openActivityAndSendElement(this, PersonalDetailsActivity.class, "user", loggedUser, true));
        ranking.setOnClickListener(v -> GeneralUtils.openActivity(this, RankingActivity.class, true));
        certificate.setOnClickListener(v -> GeneralUtils.openActivityAndSendElement(this, CertificatesActivity.class, "user", loggedUser, true));
    }

    private void loadData() {
        String currentUserEmail = Objects.requireNonNull(FirebaseAuth.getInstance().getCurrentUser()).getEmail();
        if (currentUserEmail != null) {
            UserUtils.getUserWithEmail(currentUserEmail, new UserUtils.OnUserFetchListener() {
                @Override
                public void onSuccess(User user) {
                    loggedUser = user;
                    displayUserData();
                }

                @Override
                public void onFailure(String errorMessage) {
                    DialogUtils.showErrorDialog(ProfileActivity.this, getString(R.string.error), errorMessage);
                }
            });
        } else {
            DialogUtils.showErrorDialog(this, getString(R.string.error),"No se encontró el correo electrónico del usuario.");
        }
    }

    private void displayUserData() {
        username.setText(loggedUser.getUsername());
        email.setText(loggedUser.getEmail());
        GeneralUtils.loadImageFromUrl(loggedUser.getImageUrl(), profileImage);
        GeneralUtils.hideLoadingDialog(this);
    }
}