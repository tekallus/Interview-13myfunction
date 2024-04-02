import React, { useEffect, useState } from "react";


///cozum
//Bir bileşen oluşturun; bu bileşen içinde beş buton, kullanıcının oluşturduğu hesaplama programını görüntüleyen bir liste, bir başlangıç değeri kabul eden bir form ve belirtilen değerde programın sonucunu gösteren bir alan bulunmalıdır.
//once html yapisini dusunelim
// <div> 5 tane <buton> <div>, <h1> fonksiyounum<h1>,<ul> li> ,<div><input> <buton><div>,<div><p><p><div>
//her bir buton icin onclick olayina fonksiyon yazalim.
// addToProgram icin once half,double,increment,decremet fonsiyonlarini tanimlayalim :const half = (number) => number / 2; gibi
//operation ile her butonu kendi ozelligini cagiralim or onClick={() => addToProgram("increment")}
//program dizisinin her elemanını bir <li> (list item) elemanı olarak oluşturmak icin {program.map((operation, index) => (fonksiyonu
//<input> icin const handleInputChange = (e) => {setInputValue(e.target.value);}; fonksiyonu e.target.value kullanılarak giriş alanına girilen değeri alır. 
//gonder butonu icin  handleSubmit fonsiyonunu tannimlayalim.
//İlk olarak, giriş alanına girilen değeri parseFloat fonksiyonu ile sayıya dönüştürür ve currentValue adlı bir değişkende saklar.
//program dizisindeki her bir işlemi döngüye alır (forEach kullanarak) ve her bir işlemi sırasıyla uygular. 
//switch ifadesi, her bir işlem türü için uygun işlem fonksiyonunu çağırmak için kullanılır. Örneğin, eğer işlem "half" ise half fonksiyonu çağrılır ve currentValue değişkenine uygulanır.
//Son olarak, hesaplanan son değer setResult fonksiyonu aracılığıyla result adlı state değişkenine atanır. 



// App bileşenini oluşturuyor ve CustomProgram bileşenini render ediyor
function App() {
  return <CustomProgram />;
}

// Fonksiyonları tanımlıyor
const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

// CustomProgram bileşenini tanımlıyor
const CustomProgram = () => {
  // State değişkenlerini tanımlıyor
  const [inputValue, setInputValue] = useState(""); // Input değerini tutar
  const [program, setProgram] = useState([]); // Kullanıcının oluşturduğu hesaplama programını tutar
  const [result, setResult] = useState(null); // Programın sonucunu tutar

  // Inputun değerini güncelliyor
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Program dizisine işlem ekliyor
  const addToProgram = (operation) => {
    setProgram([...program, operation]);
  };

  // Programı çalıştırıyor ve sonucu hesaplıyor
  const handleSubmit = () => {
    let currentValue = parseFloat(inputValue);
    program.forEach((operation) => {
      switch (operation) {
        case "half":
          currentValue = half(currentValue);
          break;
        case "double":
          currentValue = double(currentValue);
          break;
        case "increment":
          currentValue = increment(currentValue);
          break;
        case "decrement":
          currentValue = decrement(currentValue);
          break;
        default:
          break;
      }
    });
    setResult(currentValue);
    
  };

  // Bileşenin JSX kodunu render ediyor
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-md shadow-md">
      {/* Butonları render ediyor */}
      <div className="flex justify-between mb-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-md"
          onClick={() => addToProgram("half")}
        >
          yarim
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded-md"
          onClick={() => addToProgram("double")}
        >
          iki kati
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded-md"
          onClick={() => addToProgram("increment")}
        >
          arttir
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded-md"
          onClick={() => addToProgram("decrement")}
        >
          azalt
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded-md"
          onClick={() => setProgram([])}
        >
          Temizle
        </button>
      </div>
      {/* Başlığı render ediyor */}
      <h1 className="text-2xl font-bold mb-4">Fonksiyonum</h1>
      {/* Program listesini render ediyor */}
      <ul className="mb-4">
        {program.map((operation, index) => (
          <li key={index}>{operation}</li>
        ))}
      </ul>
      {/* Input ve gönder butonunu render ediyor */}
      <div className="flex items-center mb-4">
        <input
          type="number"
          className="border border-gray-400 rounded-md px-3 py-2 mr-2"
          placeholder="?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleSubmit}
        >
          Gönder
        </button>
      </div>
      {/* Son yürütmeyi render ediyor */}
      <p className="text-gray-600">Son yürütme:</p>
      <p className="font-bold">
        {inputValue} -&gt; Fonksiyonum -&gt; {result !== null ? result : ""}
      </p>
    </div>
  );
};

export default App;
