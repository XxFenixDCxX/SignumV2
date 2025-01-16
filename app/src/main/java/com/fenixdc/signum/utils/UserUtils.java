package com.fenixdc.signum.utils;

import static com.fenixdc.signum.utils.GeneralUtils.openActivity;

import androidx.appcompat.app.AppCompatActivity;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.entities.Categori;
import com.fenixdc.signum.entities.User;
import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.TaskCompletionSource;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FieldPath;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class UserUtils {

    private static final CollectionReference usersCollection = FirebaseFirestore.getInstance().collection("users");

    public static void registerUser(AppCompatActivity activity, String username, String email, String imageUrl) {
        GeneralUtils.showLoadingDialog(activity);
        DocumentReference document = usersCollection.document(email);

        Map<String, Object> data = new HashMap<>();
        data.put("username", username);
        data.put("email", email);
        data.put("imageUrl", imageUrl);
        data.put("birthDate", "");
        data.put("points", 0);
        data.put("certificates", "");

        document.set(data)
                .addOnSuccessListener(aVoid -> {
                    openActivity(activity, DictionaryActivity.class, true);
                    GeneralUtils.hideLoadingDialog(activity);

                })
                .addOnFailureListener(e -> {
                    GeneralUtils.hideLoadingDialog(activity);
                    DialogUtils.showErrorDialog(activity, activity.getString(R.string.error), activity.getString(R.string.erroRegister));
                });
    }

    public static void registerUser(AppCompatActivity activity, String username, String email) {
        registerUser(activity, username, email, "");
    }

    public static boolean isLogedIn() {
        return FirebaseAuth.getInstance().getCurrentUser() != null;
    }

    public interface OnUserFetchListener {
        void onSuccess(User user);
        void onFailure(String errorMessage);
    }

    public static void getUserWithEmail(String email, OnUserFetchListener listener) {
        FirebaseFirestore db = FirebaseFirestore.getInstance();

        db.collection("users")
                .whereEqualTo("email", email)
                .get()
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        QuerySnapshot querySnapshot = task.getResult();
                        if (!querySnapshot.isEmpty()) {
                            for (QueryDocumentSnapshot document : querySnapshot) {
                                User user = document.toObject(User.class);
                                listener.onSuccess(user);
                                return;
                            }
                        } else {
                            listener.onFailure("No se encontró un usuario con ese correo electrónico.");
                        }
                    } else {
                        listener.onFailure("Error al buscar el usuario: " + Objects.requireNonNull(task.getException()).getMessage());
                    }
                });
    }

    public interface OnTopUsersFetchListener {
        void onSuccess(List<User> topUsers);
        void onFailure(String errorMessage);
    }

    public static void getTopUsers(int limit, OnTopUsersFetchListener listener) {
        usersCollection
                .orderBy("points", com.google.firebase.firestore.Query.Direction.DESCENDING)
                .limit(limit)
                .get()
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        QuerySnapshot querySnapshot = task.getResult();
                        List<User> topUsers = new ArrayList<>();
                        for (QueryDocumentSnapshot document : querySnapshot) {
                            User user = document.toObject(User.class);
                            topUsers.add(user);
                        }
                        listener.onSuccess(topUsers);
                    } else {
                        listener.onFailure("Error al obtener los usuarios: " + Objects.requireNonNull(task.getException()).getMessage());
                    }
                });
    }

    public static void createGameData(AppCompatActivity activity, String email) {
        GeneralUtils.showLoadingDialog(activity);
        CollectionReference categoriesCollection = FirebaseFirestore.getInstance().collection("categories");
        CollectionReference signsCollection = FirebaseFirestore.getInstance().collection("signs");
        CollectionReference gameCollection = FirebaseFirestore.getInstance().collection("game");

        categoriesCollection.orderBy("isSubCategory").get().addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                QuerySnapshot querySnapshot = task.getResult();
                for (QueryDocumentSnapshot document : querySnapshot) {
                    String id = email + document.getId();
                    Categori categori = document.toObject(Categori.class);

                    if (!categori.isSubCategory()){
                        Map<String, Object> data = new HashMap<>();
                        data.put("progress", 0);
                        data.put("idCategorie", document.getId());

                        signsCollection.whereEqualTo("idCategorie", document.getId()).get().addOnCompleteListener(task2 -> {
                            if (task2.isSuccessful()) {
                                data.put("signs", getSigns(task2.getResult()));
                                gameCollection.document(id).set(data);
                            }
                        });
                    } else {
                        Map<String, Object> data = new HashMap<>();
                        data.put("progress", 0);
                        gameCollection.document(id).get().addOnCompleteListener(task2 -> {
                            if (task2.isSuccessful()) {
                                DocumentSnapshot document2 = task2.getResult();
                                if (document2.exists()) {
                                    signsCollection.whereEqualTo("idCategorie", document.getId()).get().addOnCompleteListener(task3 -> {
                                        if (task3.isSuccessful()) {
                                            data.put("signs", getSigns(task3.getResult()));
                                            gameCollection.document(id).set(data);
                                        }
                                    });
                                }
                            }
                        });

                    }
                }
            }
        });
    }

    public Task<Boolean> comprobarDatosJuegoPorEmail(String email) {
        TaskCompletionSource<Boolean> taskCompletionSource = new TaskCompletionSource<>();

        CollectionReference gameCollection = FirebaseFirestore.getInstance().collection("game");

        gameCollection
                .whereGreaterThanOrEqualTo(FieldPath.documentId(), email)
                .whereLessThan(FieldPath.documentId(), email + "\uf8ff")
                .limit(1)
                .get()
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        boolean existe = !task.getResult().isEmpty();
                        taskCompletionSource.setResult(existe);
                    } else {
                        taskCompletionSource.setResult(false);
                    }
                });

        return taskCompletionSource.getTask();
    }

    private static String getSigns(QuerySnapshot querySnapshot) {
        String sings = "";
        for (QueryDocumentSnapshot document : querySnapshot) {
            sings += document.getId() + ",";
        }

        if (!sings.isEmpty()) {
            sings = sings.substring(0, sings.length() - 1);
        }
        return sings;
    }
}
