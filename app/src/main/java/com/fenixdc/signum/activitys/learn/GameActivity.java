package com.fenixdc.signum.activitys.learn;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.entities.Learn;
import com.fenixdc.signum.entities.Sign;
import com.fenixdc.signum.entities.User;
import com.fenixdc.signum.utils.DialogUtils;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;
import com.google.firebase.auth.FirebaseAuth;

import java.util.Objects;

public class GameActivity extends AppCompatActivity {
    Learn learn;
    User loggedUser;
    TextView title, signs, progress, points;
    ImageView categori, sign, btnBack;
    Button option1, option2, option3, option4;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_game);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        GeneralUtils.showLoadingDialog(this);
        setUpElements();
        loadData();
        setUpListeners();
    }

    private void setUpElements () {
        title = findViewById(R.id.txtGameTitle);
        signs = findViewById(R.id.txtSigns);
        progress = findViewById(R.id.txtProgress);
        points = findViewById(R.id.txtPoints);
        categori = findViewById(R.id.imgGameBanner);
        sign = findViewById(R.id.imgSignGame);
        btnBack = findViewById(R.id.btnBackGame);
        option1 = findViewById(R.id.btnOption1);
        option2 = findViewById(R.id.btnOption2);
        option3 = findViewById(R.id.btnOption3);
        option4 = findViewById(R.id.btnOption4);
    }

    private void setUpListeners() {
        btnBack.setOnClickListener(v ->
                onBackPressed()
        );
    }

    private void loadData() {
        learn = (Learn) getIntent().getSerializableExtra("learn");
        Sign signRandom = getRandomSign();
        UserUtils.getUserWithEmail(Objects.requireNonNull(FirebaseAuth.getInstance().getCurrentUser()).getEmail(), new UserUtils.OnUserFetchListener() {
            @SuppressLint("SetTextI18n")
            @Override
            public void onSuccess(User user) {
                title.setText(learn.getName());
                signs.setText(learn.getTotalSigns() - learn.getSigns().size() + "/" + learn.getTotalSigns());
                progress.setText(learn.getProgress() + "%");
                points.setText(user.getPoints() + "");
                GeneralUtils.loadImageFromUrl(learn.getImageUrl(), categori);
                GeneralUtils.loadImageFromUrl(signRandom.getImageUrl(), sign);
                option1.setText(signRandom.getName());
                option2.setText(getRandomSign(signRandom).getName());
                option3.setText(getRandomSign(signRandom).getName());
                option4.setText(getRandomSign(signRandom).getName());
            }

            @Override
            public void onFailure(String errorMessage) {
                DialogUtils.showErrorDialog(GameActivity.this, getString(R.string.error), errorMessage);
                GeneralUtils.openActivity(GameActivity.this, DictionaryActivity.class, true);
            }
        });
    }

    private Sign getRandomSign() {
        return learn.getSigns().get((int) (Math.random() * learn.getSigns().size()));
    }

    private Sign getRandomSign(Sign sign) {
        Sign randomSign = getRandomSign();
        while (randomSign.equals(sign)) {
            randomSign = getRandomSign();
        }
        return randomSign;
    }
}