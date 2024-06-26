package group.demo.Repository;

import group.demo.Entity.LocalidadEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
@Transactional
public interface LocalidadRepository extends JpaRepository<LocalidadEntity, Integer>{
}
