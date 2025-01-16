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
import com.fenixdc.signum.entities.Categori;
import com.fenixdc.signum.entities.Learn;
import com.fenixdc.signum.entities.Sign;
import com.fenixdc.signum.recyclerview.RecyclerGameAdapter;
import com.fenixdc.signum.utils.DialogUtils;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;

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
                    createGameData(this, currentUserEmail);
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
                    learn.setIdCategorie(Objects.requireNonNull(document.getLong("idCategorie")).intValue());

                    db.collection("categories").document(learn.getIdCategorie() + "").get().addOnCompleteListener(task1 -> {
                        if (task1.isSuccessful()) {
                            learn.setName(Objects.requireNonNull(task1.getResult()).getString("name"));
                            learn.setImageUrl(Objects.requireNonNull(task1.getResult()).getString("imageUrl"));
                        }
                    }).addOnCompleteListener(t -> {
                        ArrayList<Sign> signs = new ArrayList<>();
                        String[] signIds = document.getString("signs").split(",");
                        final int totalSigns = signIds.length;
                        final AtomicInteger completedTasks = new AtomicInteger(0);

                        for (String idSign : signIds) {
                            db.collection("signs").document(idSign).get().addOnCompleteListener(task2 -> {
                                if (task2.isSuccessful()) {
                                    DocumentSnapshot documentSnapshot = task2.getResult();
                                    Sign sign = documentSnapshot.toObject(Sign.class);
                                    if (sign != null) {
                                        signs.add(sign);
                                    }
                                }

                                if (completedTasks.incrementAndGet() == totalSigns) {
                                    learn.setSigns(signs);
                                    listLearn.add(learn);
                                    if (listLearn.size() == task.getResult().size()) {
                                        GeneralUtils.hideLoadingDialog(this);
                                    }
                                }
                            });
                        }
                    });
                }
            } else {
                DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorDataLearn));
                GeneralUtils.openActivity(this, DictionaryActivity.class, true);
            }
        });
    }

    private void createGameData(AppCompatActivity activity, String email) {
        GeneralUtils.showLoadingDialog(activity);
        FirebaseFirestore db = FirebaseFirestore.getInstance();
        CollectionReference categoriesCollection = db.collection("categories");
        CollectionReference signsCollection = db.collection("signs");
        CollectionReference gameCollection = db.collection("game");

        categoriesCollection.whereEqualTo("isSubCategory", false).get().addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                QuerySnapshot querySnapshot = task.getResult();
                for (QueryDocumentSnapshot document : querySnapshot) {
                    Categori categori = document.toObject(Categori.class);
                    String id = email + document.getId();
                    Map<String, Object> data = new HashMap<>();
                    data.put("progress", 0);
                    data.put("idCategorie", Integer.parseInt(document.getId()));

                    signsCollection.whereEqualTo("idCategorie", Integer.parseInt(document.getId())).get().addOnCompleteListener(task2 -> {
                        if (task2.isSuccessful()) {
                            data.put("signs", getSigns(task2.getResult(), ""));
                            gameCollection.document(id).set(data);
                        }
                    });
                }
            }
        }).addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                categoriesCollection.whereEqualTo("isSubCategory", true).get().addOnCompleteListener(task2 -> {
                    if (task2.isSuccessful()) {
                        QuerySnapshot querySnapshot = task2.getResult();
                        for (QueryDocumentSnapshot document : querySnapshot) {
                            Categori categori = document.toObject(Categori.class);
                            int idCategorie = Integer.parseInt(document.getId());
                            String id = email + document.getLong("categoriDadId");
                            Map<String, Object> data = new HashMap<>();
                            data.put("progress", 0);
                            data.put("idCategorie", idCategorie);
                            gameCollection.document(id).get().addOnCompleteListener(task3 -> {
                                if (task3.isSuccessful()) {
                                    DocumentSnapshot document2 = task3.getResult();
                                    if (document2.exists()) {
                                        signsCollection.whereEqualTo("idCategorie", idCategorie).get().addOnCompleteListener(task4 -> {
                                            if (task4.isSuccessful()) {
                                                data.put("signs", getSigns(task4.getResult(), document2.getString("signs")));
                                                gameCollection.document(id).set(data);
                                                loadData();
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        });
    }

    private String getSigns(QuerySnapshot querySnapshot, String signs) {
        for (QueryDocumentSnapshot document : querySnapshot) {
            signs += document.getId() + ",";
        }

        if (!signs.isEmpty()) {
            signs = signs.substring(0, signs.length() - 1);
        }
        return signs;
    }
}