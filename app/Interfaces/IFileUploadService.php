<?php

namespace App\Interfaces;

use Illuminate\Http\UploadedFile;

interface IFileUploadService
{
    function uploadFile(UploadedFile $file, string $folder, ?string $name = null): string;

    function deleteFile(string $file): void;
}