package com.library.member.service;

import com.library.member.entity.Member;
import java.util.List;

public interface MemberService {
    Member addMember(Member member);
    List<Member> getAllMembers();
    Member getMemberById(Long id);
    Member updateMember(Long id, Member member);
    void deleteMember(Long id);
}
