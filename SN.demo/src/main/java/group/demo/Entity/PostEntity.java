package group.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "post", schema = "solveNow", catalog = "")
public class PostEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID", nullable = false)
    private int id;
    @Basic
    @Column(name = "ID_USUARIO", nullable = true, length = 30)
    private Integer id_Usuario;
    @Basic
    @Column(name = "ID_CALLE", nullable = true, length = 30)
    private int id_Calle;
    @Basic
    @Column(name = "ID_PROBLEMA", nullable = true, length = 30)
    private int id_problema;
    @Basic
    @Column(name = "DESCRIPCION", nullable = true, length = 30)
    private String descripcion;
    @Basic
    @Column(name = "FOTO", nullable = true, length = 30)
    private String foto;
    @Basic
    @Column(name = "NIVEL", nullable = true, length = 30)
    private String nivel;
    @Basic
    @Column(name = "VISTO", nullable = true, length = 30)
    private String visto;
    @Basic
    @Column(name = "SOLUCIONADO", nullable = true, length = 30)
    private String solucionado;
}
