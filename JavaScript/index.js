
const avatarGitHub = (e) => {
  Swal.fire({
    title: "Submit your Github username",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
    preConfirm: async (login) => {
      try {
        const githubUrl = `
                https://api.github.com/users/${login}
              `;
        const response = await fetch(githubUrl);
        if (!response.ok) {
          return Swal.showValidationMessage(`
                  ${JSON.stringify(await response.json())}
                `);
        }
        return response.json();
      } catch (error) {
        Swal.showValidationMessage(`
                Request failed: ${error}
              `);
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("gitHub").src = result.value.avatar_url;
    }
  });
};
