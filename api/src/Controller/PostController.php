<?php

namespace App\Controller;

use App\Entity\Post;
use App\Repository\PostRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Serializer\SerializerInterface;

class PostController extends AbstractController
{
    #[Route('/api/posts', name: 'app_post', methods: ["GET"])]
    public function index(PostRepository $repository, SerializerInterface $serializer): JsonResponse
    {
        return $this->json($serializer->serialize($repository->findAll(), 'json', ['groups' => ['posts']]));
    }

    #[Route('/api/posts', name: 'app_post_create', methods: ["POST"])]
    public function create(
        Request $request,
        SerializerInterface $serializer,
        EntityManagerInterface $manager,
        TokenStorageInterface $tokenStorageInterface,
        JWTTokenManagerInterface $jwtManager,
        UserRepository $userRepository,
    ): JsonResponse
    {
        $jwt = $jwtManager->decode($tokenStorageInterface->getToken());
        $post = $serializer->deserialize($request->getContent(), Post::class, 'json');
        $post->setAuthor($userRepository->findOneByEmail($jwt["email"]));
        $manager->persist($post);
        $manager->flush();
        return $this->json($serializer->serialize($post, 'json', ['groups' => ['posts']]));
    }

    #[Route('/api/posts/{id}', name: 'app_post_show', methods: ["GET"])]
    public function show(Post $post, SerializerInterface $serializer): JsonResponse
    {
        return $this->json($serializer->serialize($post, 'json', ['groups' => ['posts']]));
    }

    #[Route('/api/posts/{id}', name: 'app_post_delete', methods: ["DELETE"])]
    public function delete(Post $post, SerializerInterface $serializer, EntityManagerInterface $manager): JsonResponse
    {
        $manager->remove($post);
        $manager->flush();
        return $this->json([
            "message" => sprintf("Post %s was successfully deleted", $post->getId())
        ]);
    }
}
