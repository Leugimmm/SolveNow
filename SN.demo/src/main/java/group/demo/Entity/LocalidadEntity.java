package group.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "localidad", schema = "solveNow", catalog = "")
public class LocalidadEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID", nullable = false)
    private int id;
    @Basic
    @Column(name = "ID_Autonoma", nullable = false)
    private int idC_Autonoma;
    @Basic
    @Column(name = "NOMBRE", nullable = true, length = 30)
    private String ciudad;

}