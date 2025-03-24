<?php
$servername = "localhost";
$username = "root";
$password_db = ""; 
$database = "kb_sport3"; 

$conn = new mysqli($servername, $username, $password_db, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$identificacion = $_POST['identificacion'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$sexo = $_POST['sexo'];
$direccion = $_POST['direccion'];
$ciudad = $_POST['ciudad'];
$correo = $_POST['correo'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);

if (empty($identificacion) || empty($nombre) || empty($apellido) || empty($fecha_nacimiento) || empty($sexo) || empty($direccion) || empty($ciudad) || empty($correo) || empty($_POST['contrasena'])) {
    echo "<script>alert('Todos los campos son obligatorios.'); window.location='register.html';</script>";
    exit();
}

$stmt = $conn->prepare("SELECT id FROM clientes WHERE identificacion = ? OR correo = ?");
$stmt->bind_param("ss", $identificacion, $correo);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo "<script>alert('El usuario ya está registrado con ese número de identificación o correo.'); window.location='register.html';</script>";
    exit();
}
$stmt->close();

$insert = $conn->prepare("INSERT INTO clientes (identificacion, nombre, apellido, fecha_nacimiento, sexo, direccion, ciudad, correo, contrasena) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
$insert->bind_param("sssssssss", $identificacion, $nombre, $apellido, $fecha_nacimiento, $sexo, $direccion, $ciudad, $correo, $contrasena);

if ($insert->execute()) {
    echo "<script>alert('Usuario registrado exitosamente.'); window.location='login.html';</script>";
} else {
    echo "<script>alert('Error al registrar el usuario.'); window.location='register.html';</script>";
}

$insert->close();
$conn->close();
?>  