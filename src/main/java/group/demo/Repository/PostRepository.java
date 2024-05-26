package group.demo.Repository;

import group.demo.Entity.PostEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
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
            "    (:paramLo = 0 OR id_localidad = :paramLo);", nativeQuery = true )
    //StringBuilder
    public List<PostEntity> filtrado(@Param("paramAu") int au, @Param("paramLo") int lo, @Param("paramCa") int ca, @Param("paramPro") List<Integer> pro,@Param("paramNi") List<Integer> ni);

}
