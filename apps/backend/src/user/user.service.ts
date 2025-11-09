import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User, UserRole } from "./entities/user.entity";
import { Repository } from "typeorm";
import * as argon2 from "argon2";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto & { role: UserRole}) {
    const userExists = await this.userRepository.findOne({
      where: { email: createUserDto.email }
    });

    if (userExists) throw new BadRequestException("Email already taken!");

    if (createUserDto.phone) {
      const phoneExists = await this.userRepository.findOne({
        where: { phone: createUserDto.phone }
      });

      if (phoneExists) throw new BadRequestException("Phone already taken!");
    }

    const user = await this.userRepository.save({
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
      role: createUserDto.role,
      phone: createUserDto.phone,
    });

    return { user };
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({
      where: {email}
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
