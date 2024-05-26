package group.demo.Repository;
import group.demo.Entity.c_AutonomaEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
@Transactional
public interface c_AutonomaRepository extends JpaRepository<c_AutonomaEntity, Integer> {
}
