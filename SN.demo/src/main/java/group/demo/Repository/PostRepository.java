package group.demo.Repository;

import group.demo.Entity.PostEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public interface PostRepository extends JpaRepository<PostEntity, Integer> {
    @Query(value = "SELECT * FROM post WHERE" +
            "    (id_Problema IN (:paramPro)) AND" +
            "    (Nivel IN (:paramNi)) AND" +
            "    (:paramAu = 0 OR id_Autonoma = :paramAu) AND " +
            "    (:paramCa = 0 OR id_Calle = :paramCa) AND " +
            "    (:paramSol IS NULL OR solucionado = :paramSol) AND " +
            "    (:paramLo = 0 OR id_localidad = :paramLo);", nativeQuery = true )

    public List<PostEntity> filtrado(@Param("paramAu") int au, @Param("paramLo") int lo, @Param("paramCa") int ca, @Param("paramPro") List<Integer> pro,@Param("paramNi") List<Integer> ni,@Param("paramSol") String a);
    @Modifying
    @Query(value = "UPDATE post SET" +
            "    Solucionado=:paramSolu WHERE id = :paramId" +
            "    ", nativeQuery = true )

    public void update(@Param("paramSolu") String au, @Param("paramId") int lo);

}
