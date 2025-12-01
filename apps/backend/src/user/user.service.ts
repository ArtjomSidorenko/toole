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

  async create(createUserDto: CreateUserDto & { role: UserRole }) {
    const userExists = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (userExists) throw new BadRequestException('Email already taken!');

    if (createUserDto.phone) {
      const cleanPhone = this.cleanPhoneNumber(createUserDto.phone);

      const phoneExists = await this.userRepository.findOne({
        where: { phone: cleanPhone }
      });

      if (phoneExists) throw new BadRequestException('Phone already taken!');

      const user = await this.userRepository.save({
        email: createUserDto.email,
        password: await argon2.hash(createUserDto.password),
        role: createUserDto.role,
        phone: cleanPhone,
      });

      return { user };
    } else {
      const user = await this.userRepository.save({
        email: createUserDto.email,
        password: await argon2.hash(createUserDto.password),
        role: createUserDto.role,
      });

      return { user };
    }
  }

  private cleanPhoneNumber(phone: string): string {
    let cleaned = phone.replace(/\D/g, '');

    if (cleaned.length === 8 && cleaned.startsWith('58')) {
      cleaned = '372' + cleaned;
    } else if (cleaned.length === 10 && !cleaned.startsWith('1')) {
      cleaned = '1' + cleaned;
    }

    return cleaned;
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({
      where: {email}
    })
  }

  async findByPhone(phone: string) {
    const cleanPhone = this.cleanPhoneNumber(phone);

    return await this.userRepository.findOne({
      where: { phone: cleanPhone }
    });
  }

  async findById(user_id: string) {
    return await this.userRepository.findOne({
      where: { user_id }
    });
  }

  async updatePhone(user_id: string, phone: string) {
    return await this.userRepository.update(user_id, { phone });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}