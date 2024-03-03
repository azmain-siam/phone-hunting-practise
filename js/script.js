const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
  // 1. Where to add
  const phoneContainer = document.getElementById("phone-container");
  // Clear phone container cards before adding new search
  phoneContainer.textContent = "";

  // Display show all button there are more than 12phones
  const showAllContainer = document.getElementById("show-btn");

  if (phones.length > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  phones = phones.slice(0, 12);

  phones.forEach((phone) => {
    // To display single phones;
    console.log(phone);

    //  2. create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 shadow-xl`;

    // 3. Set innerHTML
    phoneCard.innerHTML = `
    <figure class="px-10 pt-10">
      <img src="${phone.image}" alt="Shoes"
        class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>There are many variations of passages of available, but the majority have suffered</p>
      <div class="card-actions">
        <button class="btn btn-primary">Show Details</button>
      </div>
    </div>
    `;

    // 4. Append Child
    phoneContainer.appendChild(phoneCard);
  });

  // Hide loading spinner
  toggleSpinner(false);
};

// Search Handle
const searchHandle = () => {
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  loadPhone(searchText);
};

const toggleSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

// loadPhone();
