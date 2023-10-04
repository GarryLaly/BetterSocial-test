## Jawaban C1

### Struktur Data

```
- profileId: number
- profilePhoto: string
- profileName: string
- followedBy: [
      {
         profileId: number
         profileName: string
      }
   ]
```

### Handling Issue

Jika tidak ada pengguna terkait, simple nya tidak menampilkan section tersebut.
Namun jika terlalu banyak pengguna yang terkait, bisa dilakukan indexing disisi API dan disisi mobile hanya mengambil data misalnya 10 saja yang terkait. Sehingga bisa meringankan beban load API

### Testing

Secara manual bisa dilakukan pendaftaran user A, user B dan user C. Kemudian user A follow user C dan user B follow user C, sedangkan user A dan user B belum melakukan follow. Maka dalam case ini harusnya section "disarankan untuk Anda" ini bisa muncul di user A atau di user B untuk bisa saling follow

## Jawaban C2

#### Tiap user menyimpan favorit komunitasnya

user_profiles = {
"user1": ["travel", "photography", "food"],
"user2": ["fashion", "fitness", "music"],
"user3": ["food", "cooking", "photography"], # ...
}

#### Tiap user menyimpan user yang difollow

user_connections = {
"user1": ["user2", "user3"],
"user2": ["user1"],
"user3": ["user1"], # ...
}

#### Function untuk suggest siapa yang akan difollow

```
const suggest_users_to_follow = (user)
suggested_users = []

    # Find users with similar interests
    for profile, interests in user_profiles.items():
        if profile != user and len(set(interests) & set(user_profiles[user])) > 0:
            suggested_users.append(profile)

    # Remove already followed users
    suggested_users = [u for u in suggested_users if u not in user_connections[user]]

    # Rank suggested users based on some criteria (e.g., common interests, followers, engagement)
    suggested_users = rank_users(suggested_users)

    # Return a list of suggested users
    return suggested_users
```

#### Function untuk rank algoritma

```
const rank_users = (users)
# Implement a ranking algorithm (e.g., based on common interests, followers, engagement) # Return a list of users sorted by their rank
return users
```

### Penggunaan function

```
current_user = "user1"
suggested_users = suggest_users_to_follow(current_user)
print("Suggested users to follow for", current_user, ":", suggested_users)
```
