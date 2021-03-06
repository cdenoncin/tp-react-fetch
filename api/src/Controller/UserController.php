<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Serializer\SerializerInterface;

class UserController extends AbstractController
{
    #[Route('/api/register', name: 'app_user_register')]
    public function register(
        Request                     $request,
        EntityManagerInterface      $manager,
        UserPasswordHasherInterface $hasher,
        SerializerInterface         $serializer,
    ): JsonResponse
    {
        $user = new User();
        $user->setEmail($request->get("email"));
        $user->setUserName($request->get("username"));
        $user->setPassword($hasher->hashPassword($user, $request->get("password")));
        $manager->persist($user);
        $manager->flush();
        return $this->json($serializer->serialize($user, 'json', ['groups' => ['user']]));
    }

    #[Route('/api/user', name: 'app_user_show', methods: ["GET"])]
    public function show(
        TokenStorageInterface    $tokenStorageInterface,
        JWTTokenManagerInterface $jwtManager,
        SerializerInterface      $serializer,
        UserRepository           $userRepository,
    )
    {
        $jwt = $jwtManager->decode($tokenStorageInterface->getToken());
        return ($this->json($serializer->serialize($userRepository->findOneByEmail($jwt["email"]), 'json', ['groups' => ['user']])));
    }
}
