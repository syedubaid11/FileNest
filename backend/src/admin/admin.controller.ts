import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('admin')
@UseGuards(AdminGuard)
export class AdminController {
    @Get('dashboard')
    getDashboard(){
        return {message:'welcome to the admin dashboard'}

    }
}
