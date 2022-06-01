<?php

namespace App\Entity;

use App\Repository\PostRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PostRepository::class)]
class Post
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups("posts")]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups("posts")]
    private $title;

    #[ORM\Column(type: 'text')]
    #[Groups("posts")]
    private $content;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'posts')]
    #[Groups("posts")]
    private $author;

    #[ORM\Column(type: 'datetime_immutable')]
    private $createdAt;

    public function __construct()
    {
        $this->createdAt= new \DateTimeImmutable();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}
