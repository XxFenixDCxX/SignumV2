package com.fenixdc.signum.activitys.learn;

import android.os.Bundle;
import android.widget.ImageView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.activitys.profile.ProfileActivity;
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
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;

public class LearnActivity extends AppCompatActivity {
    String currentUserEmail = Objects.requireNonNull(FirebaseAuth.getInstance().getCurrentUser()).getEmail();
    RecyclerGameAdapter gameAdapter;
    RecyclerView rvLearn;
    ArrayList<Learn> listLearn = new ArrayList<>();
    ImageView btmUser, btmDictionary;

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
        db.collection("game").whereEqualTo("email", currentUserEmail).get().addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                listLearn.clear();
                for (QueryDocumentSnapshot document : task.getResult()) {
                    Learn learn = new Learn();

                    learn.setProgress(Objects.requireNonNull(document.getLong("progress")).intValue());
                    if (learn.getProgress() == 100) continue;
                    learn.setIdCategorie(Objects.requireNonNull(document.getLong("idCategorie")).intValue());
                    learn.setTotalSigns(Objects.requireNonNull(document.getLong("totalSigns")).intValue());

                    db.collection("categories").document(learn.getIdCategorie() + "").get().addOnCompleteListener(task1 -> {
                        if (task1.isSuccessful()) {
                            learn.setName(Objects.requireNonNull(task1.getResult()).getString("name"));
                            learn.setImageUrl(Objects.requireNonNull(task1.getResult()).getString("imageUrl"));
                        }
                    }).addOnCompleteListener(t -> {
                        ArrayList<Sign> signs = new ArrayList<>();
                        String[] signIds = Objects.requireNonNull(document.getString("signs")).split(",");
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
                                        setUpElements();
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

    private void setUpElements() {
        rvLearn = findViewById(R.id.rvLearn);
        listLearn.sort(Comparator.comparingInt(Learn::getProgress).reversed());
        gameAdapter = new RecyclerGameAdapter(listLearn, learn -> GeneralUtils.openActivityAndSendElement(LearnActivity.this, GameActivity.class, "learn", learn));
        rvLearn.setAdapter(gameAdapter);
        rvLearn.setLayoutManager(new GridLayoutManager(this,2));
        GeneralUtils.hideLoadingDialog(this);
        btmUser = findViewById(R.id.btmLearnUser);
        btmDictionary = findViewById(R.id.btmLearnDictionary);
        setUpListeners();
    }

    private void setUpListeners(){
        btmUser.setOnClickListener(v -> GeneralUtils.openActivity(this, ProfileActivity.class));
        btmDictionary.setOnClickListener(v -> GeneralUtils.openActivity(this, DictionaryActivity.class));
    }

    private void createGameData(AppCompatActivity activity, String email) {
        GeneralUtils.showLoadingDialog(activity);
        FirebaseFirestore db = FirebaseFirestore.getInstance();
        CollectionReference categoriesCollection = db.collection("categories");
        CollectionReference signsCollection = db.collection("signs");
        CollectionReference gameCollection = db.collection("game");

        AtomicBoolean mainCategoriesDone = new AtomicBoolean(false);
        AtomicBoolean subCategoriesDone = new AtomicBoolean(false);

        Runnable checkCompletion = () -> {
            if (mainCategoriesDone.get()) {
                loadData();
            }
        };

        categoriesCollection.whereEqualTo("isSubCategory", false).get().addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                QuerySnapshot querySnapshot = task.getResult();
                AtomicInteger pendingTasks = new AtomicInteger(querySnapshot.size());

                for (QueryDocumentSnapshot document : querySnapshot) {
                    String id = email + document.getId();
                    Map<String, Object> data = new HashMap<>();
                    data.put("progress", 0);
                    data.put("idCategorie", Integer.parseInt(document.getId()));
                    data.put("email", currentUserEmail);

                    signsCollection.whereEqualTo("idCategorie", Integer.parseInt(document.getId())).get().addOnCompleteListener(task2 -> {
                        if (task2.isSuccessful()) {
                            if (Boolean.TRUE.equals(document.getBoolean("hasSubcategories"))) {
                                createSubCategoryData(categoriesCollection, signsCollection, Integer.parseInt(document.getId()), subSignsData -> {
                                    data.put("signs", subSignsData.get("signs"));
                                    data.put("totalSigns", subSignsData.get("totalSigns"));
                                    gameCollection.document(id).set(data).addOnCompleteListener(task3 -> {
                                        if (pendingTasks.decrementAndGet() == 0) {
                                            mainCategoriesDone.set(true);
                                            checkCompletion.run();
                                        }
                                    });
                                });
                            } else {
                                Map<String, Object> signsData = getSignsData(task2.getResult());
                                data.put("signs", signsData.get("signs"));
                                data.put("totalSigns", signsData.get("totalSigns"));
                                gameCollection.document(id).set(data).addOnCompleteListener(task3 -> {
                                    if (pendingTasks.decrementAndGet() == 0) {
                                        mainCategoriesDone.set(true);
                                        checkCompletion.run();
                                    }
                                });
                            }
                        } else {
                            if (pendingTasks.decrementAndGet() == 0) {
                                mainCategoriesDone.set(true);
                                checkCompletion.run();
                            }
                        }
                    });
                }

                if (querySnapshot.isEmpty()) {
                    mainCategoriesDone.set(true);
                    checkCompletion.run();
                }
            } else {
                mainCategoriesDone.set(true);
                checkCompletion.run();
            }
        });
    }

    public interface SubCategoryDataCallback {
        void onSubCategoryDataLoaded(Map<String, Object> subSignsData);
    }

    private void createSubCategoryData(CollectionReference categoriesCollection, CollectionReference signsCollection, int idCateogorie, SubCategoryDataCallback callback){
        Map<String, Object> subSignsData = new HashMap<>();

        categoriesCollection.whereEqualTo("categoriDadId", idCateogorie).get().addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                QuerySnapshot querySnapshot = task.getResult();
                ArrayList<Integer> categoriIds = new ArrayList<>();

                for (QueryDocumentSnapshot document : querySnapshot) {
                    categoriIds.add(Integer.parseInt(document.getId()));
                }

                signsCollection.whereIn("idCategorie", categoriIds).get().addOnCompleteListener(task2 -> {
                    if (task2.isSuccessful()) {
                        callback.onSubCategoryDataLoaded(getSignsData(task2.getResult()));
                    }
                });
            }
        });
    }

    private Map<String, Object> getSignsData(QuerySnapshot querySnapshot) {
        String signs = "";
        for (QueryDocumentSnapshot document : querySnapshot) {
            signs += document.getId() + ",";
        }

        if (!signs.isEmpty()) {
            signs = signs.substring(0, signs.length() - 1);
        }

        Map<String, Object> signsData = new HashMap<>();
        signsData.put("signs", signs);
        signsData.put("totalSigns", querySnapshot.size());
        return signsData;
    }
}