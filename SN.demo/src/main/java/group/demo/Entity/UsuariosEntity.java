package group.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Usuarios", schema = "solveNow", catalog = "")
public class UsuariosEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID", nullable = false)
    private int id;
    @Basic
    @Column(name = "Rol", nullable = true, length = 30)
    private String rol;
    @Basic
    @Column(name = "NOMBRE", nullable = true, length = 30)
    private String nombre;
    @Basic
    @Column(name = "Foto", nullable = true, length = 30)
    private String foto;
    @Basic
    @Column(name = "DESCRIPCION", nullable = true, length = 30)
    private String descripcion;
    @Basic
    @Column(name = "EMAIL", nullable = true, length = 30)
    private String email;
    @Basic
    @Column(name = "CONTRASEÑA", nullable = true, length = 30)
    private String contraseña;
    @Basic
    @Column(name = "ID_AUTONOMA", nullable = true, length = 30)
    private int id_Autonoma;
    @Basic
    @Column(name = "ID_LOCAILDAD", nullable = true, length = 30)
    private int id_Localidad;
}
