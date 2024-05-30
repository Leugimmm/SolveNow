package group.demo.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import group.demo.DTO.PostDTO;
import group.demo.Entity.MiObjeto;
import group.demo.Entity.PostEntity;
import group.demo.Repository.PostRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService{
    private static final Logger log = LoggerFactory.getLogger(PostServiceImpl.class);
    @Autowired
    private PostRepository postRepository;
    @Override
    public List<PostDTO> findAll() {
        log.info("PostServiceImpl - findAll: Lista de todos los cliente");
        List<PostDTO> listaPostDTO = postRepository.findAll()
                .stream()
                .map(p -> PostDTO.ConvertToDTO(p))
                .collect(Collectors.toList());

        return listaPostDTO;
    }

    @Override
    public PostDTO findById(PostDTO postDTO) {
        log.info("ProbleServiceImpl - findById: Buscar cliente por id: " +
                postDTO.getId());

        Optional<PostEntity> postEntity = postRepository.findById(postDTO.getId());
        if(postEntity.isPresent()) {
            postDTO = PostDTO.ConvertToDTO(postEntity.get());
            return postDTO;
        }else {
            return null;
        }
    }

    @Override
    public void save(PostDTO postDTO) {
        log.info("ClienteServiceImpl - save: Salvamos el cliente: " +
                postDTO.toString());

        PostEntity postEntity = PostDTO.ConvertToEntity(postDTO);
        postRepository.save(postEntity);
    }
    @Override
    public List<PostDTO> filtrado(String respuesta) {
        log.info("buscando por filtro" + respuesta);


        try {
            ObjectMapper mapper = new ObjectMapper();
            MiObjeto miObjeto = mapper.readValue(respuesta, MiObjeto.class);
            List<Integer> n = new ArrayList<>();
            n.add(1);
            n.add(2);
            n.add(3);
            List<Integer> pr = new ArrayList<>();
            pr.add(1);
            pr.add(2);
            pr.add(3);
            pr.add(4);

            log.info("uscando por filtro" + miObjeto.getP());
            if(miObjeto.getN().size()==0){
                miObjeto.setN(n);
            }
            if(miObjeto.getP().size()==0){
                miObjeto.setP(pr);
            }

            log.info("uscando por filtro" +miObjeto.getN());

            List<PostDTO> listaPosDTO = postRepository.filtrado(miObjeto.getComun(), miObjeto.getLo(),miObjeto.getCa(),miObjeto.getP(),miObjeto.getN(),miObjeto.getS())
                    .stream()
                    .map(p -> PostDTO.ConvertToDTO(p))
                    .collect(Collectors.toList());
            log.info(String.valueOf(listaPosDTO));
            log.info("size: " + listaPosDTO.size());
            return listaPosDTO;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @Override
    public void update(PostDTO postDTO) {
        log.info("ClienteServiceImpl - save: Salvamos el cliente: " +
                postDTO.toString());

        postRepository.update(postDTO.getSolucionado(),postDTO.getId());
    }
    @Override
    public void delete(PostDTO postDTO) {
        log.info("CuentaServiceImpl - delete: Metodo 1: borramos la cuenta: " + postDTO.toString());
        postRepository.deleteById(postDTO.getId());
    }
}
