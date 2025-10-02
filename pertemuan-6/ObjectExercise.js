let programming = { 
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Menambahkan "Go" ke akhir array languages
programming.languages.push("Go");
console.log(programming.languages);

// 2. Mengubah nilai difficulty menjadi 7 menggunakan bracket notation
programming["difficulty"] = 7;
console.log(programming.difficulty);

// 3. Menghapus properti jokes menggunakan keyword delete
delete programming.jokes; 
console.log(programming);

// 4. Menambahkan properti baru isFun dengan nilai true menggunakan dot notation
programming.isFun = true;
console.log(programming.isFun);

// 5. Menggunakan map() untuk mengubah isi languages jadi "index - bahasa"
let hasilMap = programming.languages.map(function(bahasa, index) {
    return `${index} - ${bahasa}`;
});
console.log(hasilMap);
