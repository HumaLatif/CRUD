
  const form = document.querySelector(".studentForm");
  const studentTable = document.querySelector(".studentTable");
  const addButton = document.getElementById("addstu");
  const formContent = document.querySelector(".formContent");

  let serialNumber = 0;

 
  formContent.style.display = "none";


  addButton.addEventListener("click", () => {
    formContent.style.display = "block";
  });


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;

    if (name && age && grade) {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${serialNumber++}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${grade}</td>
        <td>
          <button class="editBtn">Edit</button>
          <button class="deleteBtn">Delete</button>
        </td>
      `;

      studentTable.appendChild(row);
      form.reset();
      formContent.style.display = "none";
    } else {
      alert("Please fill all fields");
    }
  });

  // Edit and Delete buttons
  studentTable.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteBtn")) {
      e.target.closest("tr").remove();
    }

    if (e.target.classList.contains("editBtn")) {
      const row = e.target.closest("tr");
      const name = prompt("Edit Name:", row.children[1].textContent);
      const age = prompt("Edit Age:", row.children[2].textContent);
      const grade = prompt("Edit Grade:", row.children[3].textContent);

      if (name && age && grade) {
        row.children[1].textContent = name;
        row.children[2].textContent = age;
        row.children[3].textContent = grade;
      } else {
        alert("All fields must be filled to update.");
      }
    }
  });

