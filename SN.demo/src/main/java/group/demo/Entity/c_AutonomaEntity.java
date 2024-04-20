package group.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "c_Autonoma", schema = "solveNow", catalog = "")
public class c_AutonomaEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "ID", nullable = false)
    private int id;
    @Basic
    @Column(name = "NOMBRE", nullable = true, length = 30)
    private String c_autonoma;
}
