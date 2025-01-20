package com.fenixdc.signum.activitys.learn;

import android.annotation.SuppressLint;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.DataSource;
import com.bumptech.glide.load.engine.GlideException;
import com.bumptech.glide.request.RequestListener;
import com.bumptech.glide.request.RequestOptions;
import com.bumptech.glide.request.target.Target;
import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.activitys.profile.ProfileActivity;
import com.fenixdc.signum.entities.Learn;
import com.fenixdc.signum.entities.Sign;
import com.fenixdc.signum.entities.User;
import com.fenixdc.signum.utils.DialogUtils;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public class GameActivity extends AppCompatActivity {
    Learn learn;
    Sign actualSign;
    User loggedUser;
    TextView title, signs, progress, points;
    ImageView categori, sign, btnBack, btmUser, btmDictionary;
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
        btmUser = findViewById(R.id.btmGameUser);
        btmDictionary = findViewById(R.id.btmGameDictionary);
    }

    private void setUpListeners() {
        btnBack.setOnClickListener(v ->
                onBackPressed()
        );
        btmUser.setOnClickListener(v -> GeneralUtils.openActivity(this, ProfileActivity.class));
        btmDictionary.setOnClickListener(v -> GeneralUtils.openActivity(this, DictionaryActivity.class));
    }

    private void loadData() {
        learn = (Learn) getIntent().getSerializableExtra("learn");
        actualSign = getRandomSign();
        UserUtils.getUserWithEmail(Objects.requireNonNull(FirebaseAuth.getInstance().getCurrentUser()).getEmail(), new UserUtils.OnUserFetchListener() {
            @SuppressLint("SetTextI18n")
            @Override
            public void onSuccess(User user) {
                title.setText(learn.getName());
                signs.setText(learn.getTotalSigns() - learn.getSigns().size() + "/" + learn.getTotalSigns());
                progress.setText(learn.getProgress() + "%");
                points.setText(user.getPoints() + "");
                GeneralUtils.loadImageFromUrl(learn.getImageUrl(), categori);
                Glide.with(GameActivity.this)
                        .load(actualSign.getImageUrl())
                        .apply(new RequestOptions().placeholder(R.drawable.imaguser))
                        .listener(new RequestListener<Drawable>() {
                            @Override
                            public boolean onLoadFailed(@Nullable GlideException e, Object model, Target<Drawable> target, boolean isFirstResource) {
                                return false;
                            }

                            @Override
                            public boolean onResourceReady(Drawable resource, Object model, Target<Drawable> target, DataSource dataSource, boolean isFirstResource) {
                                GeneralUtils.hideLoadingDialog(GameActivity.this);
                                return false;
                            }
                        })
                        .into(sign);
                List<Sign> options = getRandomOptions(actualSign);
                option1.setText(options.get(0).getName());
                option2.setText(options.get(1).getName());
                option3.setText(options.get(2).getName());
                option4.setText(options.get(3).getName());
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

    private List<Sign> getRandomOptions(Sign correctSign) {
        List<Sign> options = new ArrayList<>();

        List<Sign> otherSigns = new ArrayList<>(learn.getSigns());
        otherSigns.remove(correctSign);

        if (otherSigns.size() < 3) {
            CollectionReference signsCollection = FirebaseFirestore.getInstance().collection("signs");
            signsCollection.whereNotEqualTo("name", correctSign.getName()).get().addOnSuccessListener(queryDocumentSnapshots -> {
                for (int i = 0; i < 3 - otherSigns.size(); i++) {
                    Sign sign = queryDocumentSnapshots.toObjects(Sign.class).get(i);
                    otherSigns.add(sign);
                }
            });
        }

        Collections.shuffle(otherSigns);
        options.addAll(otherSigns.subList(0, 3));

        options.add(correctSign);

        Collections.shuffle(options);

        return options;
    }

}