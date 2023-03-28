// // // const express = require('express');
// // // const server = express();
// // // const MongoClient = require('mongodb').MongoClient;


// // const express = require('express');
// // const server = express();
// // const MongoClient = require('mongodb').MongoClient;

// // // MongoDB bağlantı bilgileri
// // const uri = 'mongodb://127.0.0.1:27017';
// // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // // Veri tabanı ve koleksiyon tanımları
// // let db, collection;

// // // MongoDB bağlantısı Promise yapısı ile asenkron hale getirildi
// // client.connect().then(() => {
// //   console.log('MongoDB bağlantısı kuruldu');
// //   db = client.db('oyun');
// //   collection = db.collection('skor');
// // }).catch((err) => {
// //   console.log('MongoDB bağlantı hatası:', err);
// // });

// // // Veri ekleme işlemi
// // server.get('/ekle/:ad/:skor', (req, res) => {
// //   const yeniSkor = { ad: req.params.ad, skor: parseInt(req.params.skor) };
// //   collection.insertOne(yeniSkor).then((result) => {
// //     console.log('Yeni skor eklendi:', result.ops[0]);
// //     res.send('Yeni skor eklendi: ' + result.ops[0].ad + ', ' + result.ops[0].skor);
// //   }).catch((err) => {
// //     console.log('Veri ekleme hatası:', err);
// //     res.send('Veri ekleme hatası');
// //   });
// // });

// // // Veri silme işlemi
// // server.get('/sil/:ad', (req, res) => {
// //   const silinecekSkor = { ad: req.params.ad };
// //   collection.deleteOne(silinecekSkor).then((result) => {
// //     console.log('Skor silindi:', result.deletedCount);
// //     res.send('Skor silindi: ' + result.deletedCount);
// //   }).catch((err) => {
// //     console.log('Veri silme hatası:', err);
// //     res.send('Veri silme hatası');
// //   });
// // });

// // // Veri listeleme işlemi
// // server.get('/listele', (req, res) => {
// //   collection.find().toArray().then((skorlar) => {
// //     console.log('Skorlar:', skorlar);
// //     res.send('Skorlar: ' + JSON.stringify(skorlar));
// //   }).catch((err) => {
// //     console.log('Veri listeleme haatas')
// // });
// // });



// // // MongoDB bağlantı bilgileri
// // // const uri = 'mongodb://127.0.0.1:27017';
// // // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // // // Veri tabanı bağlantısı kurulduğunda çalışacak fonksiyon
// // // client.connect(err => {
// // //   if (err) {
// // //     console.log('MongoDB bağlantı hatası:', err);
// // //     return;
// // //   }

// // //   console.log('MongoDB bağlantısı kuruldu');

// // //   // Veri tabanı ve koleksiyon tanımları
// // //   const db = client.db('oyun');
// // //   const collection = db.collection('skor');

// // //   // Veri ekleme işlemi
// // //   const yeniSkor = { ad: 'Ahmet', skor: 500 };
// // //   collection.insertOne(yeniSkor, (err, result) => {
// // //     if (err) {
// // //       console.log('Veri ekleme hatası:', err);
// // //       return;
// // //     }
// // //     console.log('Yeni skor eklendi:', result.ops[0]);
// // //   });

// // //   // Veri silme işlemi
// // //   const silinecekSkor = { ad: 'Ahmet' };
// // //   collection.deleteOne(silinecekSkor, (err, result) => {
// // //     if (err) {
// // //       console.log('Veri silme hatası:', err);
// // //       return;
// // //     }
// // //     console.log('Skor silindi:', result.deletedCount);
// // //   });

// // //   // Veri listeleme işlemi
// // //   collection.find().toArray((err, skorlar) => {
// // //     if (err) {
// // //       console.log('Veri listeleme hatası:', err);
// // //       return;
// // //     }
// // //     console.log('Skorlar:', skorlar);
// // //   });

// // //   // Bağlantıyı kapat
// // //   client.close();
// // // });
















// // // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // // client.connect(err => {
// // //   const collection = client.db("oyun").collection("skor");
  
// // //   // veri ekleme örneği
// // //   const yeniSkor = { ad: "Ali", skor: 100 };
// // //   collection.insertOne(yeniSkor, (err, result) => {
// // //     if (err) throw err;
// // //     console.log("Yeni skor eklendi:", result.ops[0]);
// // //   });
  
// //   // veri listeleme örneği
// // //   collection.find().toArray((err, skorlar) => {
// // //     if (err) throw err;
// // //     console.log("Skorlar:", skorlar);
// // //   });
  
// // //   // veri silme örneği
// // //   const silinecekSkor = { ad: "Ali" };
// // //   collection.deleteOne(silinecekSkor, (err, result) => {
// // //     if (err) throw err;
// // //     console.log("Skor silindi:", result.deletedCount);
// // //   });
  
// //   // bağlantıyı kapat
// // //   client.close();
// // // });



















// // // const dbUrl ='mongodb://127.0.0.1:27017';
// // // const dbName ='oyun';

// // // mongodb.connect(dbUrl,function(err,client){
// // //     if(err) throw err;
// // //     console.log("mongo db bağlandı");
// // //     const db = client.db(dbName);
// // //     const collection =db.collection('skor_tablosu');

// // //     const yeniSkor={skor:47,ad:"abdullah"};
// // //     collection.insertOne(yeniSkor,function(err,result){
// // //         if(err) throw err;
// // //         console.log("veri tabanına kayıt oldundu")
// // //         client.close();
        
// // //     });
// // // });
// // // const mongoose = require('mongoose');

// // // mongoose.connect('mongodb://127.0.0.1:27017/oyun', { useNewUrlParser: true });

// // // const db = mongoose.connection;

// // // db.on('error', console.error.bind(console, 'MongoDB bağlantı hatası:'));

// // // db.once('open', function() {
// // //   console.log('MongoDB bağlantısı başarılı!');


// // // });

// // // collection.find({}).toArray(function(err, results) {
// // //     if (err) throw err;
// // //     console.log("Tüm kayıtlar:");
// // //     console.log(results);
// // //     client.close();
// // //   });


// // // const mongoose = require('mongoose');

// // // mongoose.connect('mongodb://127.0.0.1:27017/oyun', { useNewUrlParser: true });

// // // const db = mongoose.connection;

// // // db.on('error', console.error.bind(console, 'MongoDB bağlantı hatası:'));

// // // db.once('open', function() {
// // //   console.log('MongoDB bağlantısı başarılı!');

// // //   const collection = db.collection('skor_tablosu');

// // //   collection.find({}).toArray(function(err, results) {
// // //     if (err) throw err;
// // //     console.log("Tüm kayıtlar:");
// // //     console.log(results);
// // //     mongoose.connection.close();
// // //   });
// // // });





// // // connect.insertOne({ad:"abdullah"},function(err,result){
// // //     if(err) throw err;
// // //     console.log("kayıt başarılı");
// // // })


// // server.listen(3000,(req,res)=>{
// //     console.log("3000 portu çalışıyor")
// // })
// s

// const express = require('express');
// const { MongoClient } = require('mongodb');

// // Set up a basic Express server
// const app = express();
// const port = 3000;

// // Connect to the MongoDB database
// const uri = 'mongodb://localhosts:27017';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("oyun").collection("skor");

//   // API endpoint for adding a score
//   app.post('/api/add-score', (req, res) => {
//     const { username, score } = req.body;

//     // Insert the score data into the database
//     collection.insertOne({ username, score }, (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error inserting score');
//       } else {
//         res.status(200).send('Score inserted successfully');
//       }
//     });
//   });

//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
//   });
// });





// const express = require('express');
// const mongoose = require('mongoose');
// const server =  express();

// //mongodb bağlantıs
// mongoose.connect('mongodb://127.0.0.1:27017/oyun',{ useNewUrlParser: true });

// //skor şeması 
//  const scoreSchema =new mongoose.Schema({   
//     name:String,
//     score:Number
//  });

//  //skor modeli  
//  const score=mongoose.model('skor',scoreSchema);

//  //yeni skor eklemek için post isteği

//  server.post('/scores',(req,res)=>{
//     const {name,score}= req.body;

//     // Yeni bir skor oluştur
//   const newScore = new Score({ name, score });

//   // Skoru kaydet
//    newScore.save();

//   // Başarılı yanıt gönder
//   res.send('Skor başarıyla eklendi.');
  
//  });

// // // Yeni bir skor oluştur
// // const newScore = new Score({ name: 'Oyuncu Adı', score: 100 });

// // // Skoru kaydet
// // newScore.insertOne();


// server.get('/tablo',(req,res)=>{
//     res.send("tablo sayfasına hoşgeldin")
// })

// server.listen(3000,(req,res)=>{
//     console.log("3000 portu çalışıyor");
// })



console.log("test1");

const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
//mongodb Bağlantı kodları
mongoose.connect('mongodb://127.0.0.1:27017/oyun', { useNewUrlParser: true })
.then(()=>console.log("bağlantı başarılı"))
.catch(err => console.log(err));

//veri tabanı için oluşturduğumuz şema
const gameScoreSchema  =new mongoose.Schema({
    ad:String,
    skor:Number,
    date:{type:Date,default:Date.now}
});

const GameScore  = mongoose.model('GameScore' ,gameScoreSchema);


app.post('/skor47',async(req,res)=>{
    try {
        const {ad,skor}=req.body;
        //oyun skorunu veri tabanına kayıt etme
        const gameScore = new GameScore({ad,skor});
        await gameScore.save();
        res.status(201).json({success:true});

    } catch (err) {
        console.error(err);
        res.status(500).json({success:false})
    }
    const gameScore = await GameScore.create({ ad: 'mehmet', skor: 25 });
});


// bu method mongodb için kullanılan method 
// mongoose.connection.insertOne({ad:"mehmet",skor:25,},function(err,result){
//     if(err) throw err;
//     console.log("başarılı kayıt oldu");
//     result.close();

// });

// burada veri tabanına kayıt edilen bütün verileri listeliyoruz
app.get('/skor',async(req,res)=>{
    const gameScore =await GameScore.find();
    res.json(gameScore);
    
});


app.post('/skor',async(req,res)=>{
    const{ad,skor}=req.body;
    const gameScore=await GameScore.create({ad,skor});
    res.json(gameScore);
})



app.listen(3000,()=>{
    console.log("3000 portu çalışıyor");
})