import Swal from 'sweetalert2';

const alert = (title,icon) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1200,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: icon,
    title: title
  });
}

export default alert