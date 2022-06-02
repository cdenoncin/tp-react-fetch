<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Factory\PostFactory;
use App\Factory\UserFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
        $admin = new User();
        $admin->setEmail("admin@admin.com");
        $admin->setUserName("admin");
        $admin->setPassword($this->hasher->hashPassword($admin, "password"));
        $manager->persist($admin);
        $manager->flush();

        UserFactory::createMany(5);
        PostFactory::createMany(10, function () {
            return [
                "author" => UserFactory::random(),
            ];
        });
    }
}
