import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserRole } from "./entities/user.entity";

// http://localhost:3001/api/user
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  // http://localhost:3001/api/user/register/employer
  @Post("register/employer")
  @UsePipes(new ValidationPipe())
  registerEmployer(@Body() createUserDto: CreateUserDto) {
    return this.userService.create({
      ...createUserDto,
      role: UserRole.EMPLOYER
    });
  }

  // http://localhost:3001/api/user/register/employee
  @Post("register/employee")
  @UsePipes(new ValidationPipe())
  registerEmployee(@Body() createUserDto: CreateUserDto) {
    return this.userService.create({
      ...createUserDto,
      role: UserRole.EMPLOYEE
    });
  }

  // http://localhost:3001/api/user/2
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(id);
  }

  // http://localhost:3001/api/user/2
  // => update user
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  // http://localhost:3001/api/user/2
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
