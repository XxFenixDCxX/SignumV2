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
import com.fenixdc.signum.recyclerview.RecyclerGameAdapter;
import com.fenixdc.signum.utils.DialogUtils;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;
import com.google.firebase.auth.FirebaseAuth;

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
                if (exists) {

                } else {
                    UserUtils.createGameData(this, currentUserEmail);
                }
            } else {
                DialogUtils.showErrorDialog(this, getString(R.string.error), getString(R.string.errorDataLearn));
                GeneralUtils.openActivity(this, DictionaryActivity.class, true);
            }
        });
    }

//    private void loadData() {
//        String currentUserEmail = Objects.requireNonNull(FirebaseAuth.getInstance().getCurrentUser()).getEmail();
//        FirebaseFirestore.getInstance().collection("game")
//                .get()
//                .addOnCompleteListener(task -> {
//                    if (task.isSuccessful()) {
//                        QuerySnapshot querySnapshot = task.getResult();
//                        listLearn.clear();
//                        if (querySnapshot != null) {
//                            for (QueryDocumentSnapshot document : querySnapshot) {
//                                Learn learn = new Learn();
//                                learn.setProgress(Integer.parseInt(document.getString("progress")));
//                                learn.setIdCategorie(Integer.parseInt(document.getString("idCategorie")));
//
//                                FirebaseFirestore.getInstance().collection("categories")
//                                        .document(learn.getIdCategorie() + "")
//                                        .get()
//                                        .addOnCompleteListener(task2 -> {
//                                            if (task2.isSuccessful()) {
//                                                QuerySnapshot document2 = task.getResult();
//                                                if (document.exists()) {
//                                                    Map<String, Object> data = document.getData();
//                                                    System.out.println("Datos del documento: " + data);
//                                                } else {
//                                                    System.out.println("El documento no existe.");
//                                                }
//                                            } else {
//                                                System.out.println("Error al obtener el documento: " + task.getException());
//                                            }
//                                        });
//
//                                Categori category = document.toObject(Categori.class);
//                                category.setHasSubcategories(document.getBoolean("hasSubcategories"));
//                                listCategories.add(category);
//                                if(!category.isSubCategory()){
//                                    listCategoriesShow.add(category);
//                                }
//                            }
//                            setUpElements();
//                            dictionaryAdapter.notifyDataSetChanged();
//                        }
//                    }
//                });
//    }
}