package group.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Calles", schema = "solveNow", catalog = "")
public class CallesEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID", nullable = false)
    private int id;
    @Basic
    @Column(name = "ID_localidad", nullable = false)
    private int id_localidad;
    @Basic
    @Column(name = "NOMBRE", nullable = true, length = 30)
    private String calle;
}
