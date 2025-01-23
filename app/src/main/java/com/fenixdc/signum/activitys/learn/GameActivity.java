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

        UserUtils.getUserWithEmail(FirebaseAuth.getInstance().getCurrentUser().getEmail(), new UserUtils.OnUserFetchListener() {
            @Override
            public void onSuccess(User user) {
                loggedUser = user;
            }

            @Override
            public void onFailure(String errorMessage) {
                DialogUtils.showErrorDialog(GameActivity.this, getString(R.string.error), errorMessage);
                GeneralUtils.openActivity(GameActivity.this, DictionaryActivity.class, true);
            }
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
        option1.setOnClickListener(v -> game(option1));
        option2.setOnClickListener(v -> game(option2));
        option3.setOnClickListener(v -> game(option3));
        option4.setOnClickListener(v -> game(option4));
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
                getRandomOptions(actualSign, options -> {
                    option1.setText(options.get(0).getName());
                    option2.setText(options.get(1).getName());
                    option3.setText(options.get(2).getName());
                    option4.setText(options.get(3).getName());
                });
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

    private void getRandomOptions(Sign correctSign, OptionsCallback callback) {
        List<Sign> options = new ArrayList<>();

        List<Sign> otherSigns = new ArrayList<>(learn.getSigns());
        otherSigns.remove(correctSign);

        if (otherSigns.size() < 3) {
            int missingCount = 3 - otherSigns.size();
            CollectionReference signsCollection = FirebaseFirestore.getInstance().collection("signs");
            signsCollection.whereNotEqualTo("name", correctSign.getName()).get()
                    .addOnSuccessListener(queryDocumentSnapshots -> {
                        List<Sign> fetchedSigns = queryDocumentSnapshots.toObjects(Sign.class);
                        otherSigns.addAll(fetchedSigns.subList(0, Math.min(missingCount, fetchedSigns.size())));

                        completeOptions(options, otherSigns, correctSign, callback);
                    })
                    .addOnFailureListener(e -> callback.onOptionsReady(new ArrayList<>()));
        } else {
            completeOptions(options, otherSigns, correctSign, callback);
        }
    }

    private void completeOptions(List<Sign> options, List<Sign> otherSigns, Sign correctSign, OptionsCallback callback) {
        Collections.shuffle(otherSigns);
        options.addAll(otherSigns.subList(0, Math.min(3, otherSigns.size())));

        options.add(correctSign);
        Collections.shuffle(options);

        callback.onOptionsReady(options);
    }

    public interface OptionsCallback {
        void onOptionsReady(List<Sign> options);
    }

    private void game(Button option) {
        FirebaseFirestore db = FirebaseFirestore.getInstance();
        CollectionReference game = db.collection("game");
        CollectionReference users = db.collection("users");

        if (option.getText().equals(actualSign.getName())){
            boolean completedGame = false;
            learn.getSigns().remove(actualSign);
            learn.setProgress(calculateProgress(learn.getTotalSigns(), learn.getSigns()));

            if(learn.getProgress() >= 100){
                DialogUtils.showSuccessDialog(this, getString(R.string.correct), getString(R.string.congratulations_message));
                completedGame = true;
            } else {
                DialogUtils.showSuccessDialog(this, getString(R.string.correct), getString(R.string.correct_answer));
            }

            game.document(loggedUser.getEmail() + learn.getIdCategorie()).update("signs", learn.SignsToString());
            game.document(loggedUser.getEmail() + learn.getIdCategorie()).update("progress", learn.getProgress());
            loggedUser.setPoints(loggedUser.getPoints() + 10);
            users.document(loggedUser.getEmail()).update("points", loggedUser.getPoints());
            option1.setVisibility(Button.VISIBLE);
            option2.setVisibility(Button.VISIBLE);
            option3.setVisibility(Button.VISIBLE);
            option4.setVisibility(Button.VISIBLE);

            if (completedGame){
                users.document(loggedUser.getEmail()).update("certificates", learn.getName()).addOnSuccessListener(aVoid -> GeneralUtils.openActivity(this, LearnActivity.class, true));
                return;
            }

            loadData();
            return;
        }

        option.setVisibility(Button.INVISIBLE);

        int puntos = 0;

        if (loggedUser.getPoints() > 5){
            loggedUser.setPoints(loggedUser.getPoints() - 5);
        }

        users.document(loggedUser.getEmail()).update("points", loggedUser.getPoints());
        DialogUtils.showErrorDialog(this, getString(R.string.incorrect), getString(R.string.incorrect_answer));
    }

    private int calculateProgress(int total, List<Sign> remainingSigns) {
        if (remainingSigns == null || remainingSigns.isEmpty()) {
            return 100;
        }

        int remaining = remainingSigns.size();

        if (remaining > total) {
            throw new IllegalArgumentException("La lista de signos restantes no puede exceder el total de signos.");
        }

        int guessed = total - remaining;
        return (int) ((guessed / (double) total) * 100);
    }
}