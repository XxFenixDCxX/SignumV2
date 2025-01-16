package com.fenixdc.signum.activitys.learn;

import android.os.Bundle;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.recyclerview.widget.RecyclerView;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.entities.Learn;
import com.fenixdc.signum.entities.Sign;
import com.fenixdc.signum.recyclerview.RecyclerGameAdapter;
import com.fenixdc.signum.utils.DialogUtils;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;

import java.util.ArrayList;
import java.util.Objects;

public class LearnActivity extends AppCompatActivity {
    String currentUserEmail = Objects.requireNonNull(FirebaseAuth.getInstance().getCurrentUser()).getEmail();
    RecyclerGameAdapter gameAdapter;
    RecyclerView rvLearn;
    ArrayList<Learn> listLearn = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_learn);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
        GeneralUtils.showLoadingDialog(this);
        createGameData();
    }

    private void createGameData() {
        UserUtils.checkGameData(currentUserEmail).addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                boolean exists = task.getResult();
                if (!exists) {
                    UserUtils.createGameData(this, currentUserEmail, this::loadData);
                } else {
                    loadData();
                }
            } else {
                DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorDataLearn));
                GeneralUtils.openActivity(this, DictionaryActivity.class, true);
            }
        });
    }

    private void loadData() {
        FirebaseFirestore db = FirebaseFirestore.getInstance();
        db.collection("game").get().addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                listLearn.clear();
                for (QueryDocumentSnapshot document : task.getResult()) {
                    Learn learn = new Learn();
                    learn.setProgress(Objects.requireNonNull(document.getLong("progress")).intValue());
                    learn.setIdCategorie(Integer.parseInt(document.getString("idCategorie")));

                    db.collection("categories").document(String.valueOf(learn.getIdCategorie())).get().addOnCompleteListener(task1 -> {
                        if (task1.isSuccessful()) {
                            learn.setName(Objects.requireNonNull(task1.getResult()).getString("name"));
                            learn.setImageUrl(Objects.requireNonNull(task1.getResult()).getString("imageUrl"));
                        }
                    }).addOnCompleteListener(t -> {
                        db.collection("signs").whereEqualTo("idCategorie", learn.getIdCategorie()).get().addOnCompleteListener(task2 -> {
                            if (task2.isSuccessful()) {
                                for (QueryDocumentSnapshot document1 : task2.getResult()) {
                                    learn.getSigns().add(document1.toObject(Sign.class));
                                }
                            }
                        });
                    });
                }
                GeneralUtils.hideLoadingDialog(this);
            } else {
                DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorDataLearn));
                GeneralUtils.openActivity(this, DictionaryActivity.class, true);
            }
        });
    }
}