export default async (idName) => {
    const text = document.getElementById(idName);
    text.select();
    text.setSelectionRange(0, 99999); // for mobile devices
  
    try {
      await navigator.clipboard.writeText(text.value);
      alert("Copied the text: " + text.value);
    } catch (err) {
      console.error("Unable to copy text: " + err);
    }
  };
  