package com.fenixdc.signum.utils;

import static com.fenixdc.signum.utils.GeneralUtils.openActivity;

import androidx.appcompat.app.AppCompatActivity;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.entities.User;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.DocumentReference;
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
}
