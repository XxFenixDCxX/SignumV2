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
import com.fenixdc.signum.activitys.loginRegister.LoginActivity;
import com.fenixdc.signum.activitys.loginRegister.MainActivity;
import com.fenixdc.signum.entities.User;
import com.fenixdc.signum.utils.DialogUtils;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.firebase.auth.FirebaseAuth;

import java.util.Objects;

public class ProfileActivity extends AppCompatActivity {
    LinearLayout personalDetails, certificate, ranking, changeAccount, logout;
    BottomNavigationView menu;
    TextView email, username;
    ImageView profileImage;

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
        loadData();
    }

    private void setUpElements(){
        personalDetails = findViewById(R.id.llPersonalDetails);
        certificate = findViewById(R.id.llCertificates);
        ranking = findViewById(R.id.llRanking);
        changeAccount = findViewById(R.id.llChangeAcount);
        logout = findViewById(R.id.llCloseSesion);
        menu = findViewById(R.id.bttomNavProfile);
        email = findViewById(R.id.txtEmailProfile);
        username = findViewById(R.id.txtUsernameProfile);
        profileImage = findViewById(R.id.imgProfile);
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

        menu.setOnNavigationItemSelectedListener(item -> {
            int itemId = item.getItemId();
            if (itemId == R.id.navDictionari) {
                GeneralUtils.openActivity(this, DictionaryActivity.class);
            } else if (itemId == R.id.navLearn) {
                //toDo definir actividad de lear cuando se cree
                GeneralUtils.openActivity(this, ProfileActivity.class);
            }

            return true;
        });
    }

    private void loadData() {
        String currentUserEmail = Objects.requireNonNull(FirebaseAuth.getInstance().getCurrentUser()).getEmail();
        if (currentUserEmail != null) {
            UserUtils.getUserWithEmail(currentUserEmail, new UserUtils.OnUserFetchListener() {
                @Override
                public void onSuccess(User user) {
                    displayUserData(user);
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

    private void displayUserData(User user) {
        username.setText(user.getUsername());
        email.setText(user.getEmail());
        GeneralUtils.loadImageFromUrl(user.getImageUrl(), profileImage);
    }
}