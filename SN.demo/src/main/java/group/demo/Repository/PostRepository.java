package group.demo.Repository;

import group.demo.Entity.PostEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
@Transactional
public interface PostRepository extends JpaRepository<PostEntity, Integer> {
}
