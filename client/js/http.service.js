const API_URL = "http://localhost:3000/api";

function buildUrl(url) {
  return `${API_URL}/${url}`;
}

export async function getStudents() {
  const response = await fetch(buildUrl("students"));

  return response.json();
}

export async function getStudent(id) {
  const response = await fetch(buildUrl(`students/${id}`));

  return response.json();
}

export async function postStudent(data) {
  const extras = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  const response = await fetch(buildUrl(`students`), extras);

  return response.json();
}

export async function deleteStudent(id) {
  const response = await fetch(buildUrl(`students/${id}`), {
    method: "DELETE"
  });

  return response.json();
}

export default {
  getStudents,
  getStudent,
  postStudent,
  deleteStudent
};
